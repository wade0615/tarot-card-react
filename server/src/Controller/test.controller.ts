import { Req, Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import apiPath from 'src/Center/api.path';
// import { LoginDto } from 'src/Dto/Auth/login.dto';
// import { LogoutDto } from 'src/Dto/Auth/logout.dto';
import { GlobalDTOValidationPipe } from 'src/Global/global.dto.validation.pipe';
import { TestService } from 'src/Service/test.service';

@ApiTags('test')
@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  /**
   * test punch me
   * @param body
   * @returns
   */
  @Get(apiPath.test.punchMe)
  @UsePipes(GlobalDTOValidationPipe)
  async punchMe(@Req() req) {
    const result = {
      text: '打我啊笨蛋',
    };

    return result;
  }

  /**
   * test
   * @param body
   * @returns
   */
  @Post(apiPath.test.getFireBase)
  @UsePipes(GlobalDTOValidationPipe)
  async test(@Req() req) {
    const result = await this.testService.getFireBase();

    return result;
  }
}
