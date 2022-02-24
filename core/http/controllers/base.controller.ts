import {Body, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res} from "@nestjs/common";
import {Response} from "express";

export class BaseController {

  protected service

  @Post()
  async create(
    @Body() model,
    @Res() res: Response
  ) {
    return res.status(HttpStatus.CREATED).send(await this.service.create(model))
  }

  @Get()
  async findAll(
    @Res() res: Response
  ) {
    return res.status(HttpStatus.OK).send(await this.service.findAll())
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number,
    @Res() res: Response
  ) {
    return res.status(HttpStatus.OK).send({
      message: `This action return a #${id} model`
    })
  }

  @Put(':id')
  update(@Param('id') id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).send({
      message: `This update a #${id} model`
    })
  }

  @Delete(':id')
  remove(@Param('id') id: number, @Res() res: Response) {
    return res.status(HttpStatus.OK).send({
      message: `This remove a #${id} model`
    })
  }


}
