import {Module} from '@nestjs/common';
import {UserModule} from "./user/user.module";
import {BaseModule} from "../core/modules/base.module";

@Module({
  imports: [UserModule]
})
export class AppModule extends BaseModule {
}
