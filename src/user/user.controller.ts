import {BaseController} from "../../core/http/controllers/base.controller";
import {Body, Controller, HttpStatus, Post, Res, ValidationPipe} from "@nestjs/common";
import {UserService} from "./user.service";
import {UserValidatitor} from "./validators/user.validatitor";
import {Response} from "express";

@Controller('/user')
export class UserController extends BaseController {

  constructor(private userService: UserService) {
    super()
    this.service = userService
  }

  @Post()
  async create(
    @Body(new ValidationPipe()) model: UserValidatitor,
    @Res() res: Response
  ) {
    return res.status(HttpStatus.CREATED).send(await this.userService.create(model))
  }

}
