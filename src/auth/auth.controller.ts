import { Body, Controller, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('signup')
    signup(@Body() authDto: AuthDTO) {
        console.log({
            authDto,
        })
        return this.authService.signup(authDto);
    }

    @Post('signin')
    signin(@Body() authDto: AuthDTO) {
        return this.authService.signin(authDto);
    }
}