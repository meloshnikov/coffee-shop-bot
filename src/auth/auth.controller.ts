/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { RefreshTokenDto } from './dto/refreshToken.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService){}

  @UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('login')
	async login(@Body() data: AuthDto) {
		return this.AuthService.login(data);
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('refresh-token')
	async getNewTokens(@Body() data: RefreshTokenDto) {
		return this.AuthService.getNewTokens(data);
	}


	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: AuthDto) {

		const oldUser = await this.AuthService.findByEmail(dto.email);
		if (oldUser)
			throw new BadRequestException(
				'User with this email is already in the system'
			)

		return this.AuthService.register(dto);
	}
}
