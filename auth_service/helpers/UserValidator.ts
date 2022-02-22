import { UserValidation } from '../configs/userValidationConfig';

type UserCredentials = {
  username: string;
  password: string;
};

class UserValidator {
  private readonly config: UserValidation;

  constructor(config: UserValidation) {
    this.config = config;
  }

  public isValid({ username, password }: UserCredentials): boolean {
    if (username.length < this.config.usernameLength) {
      return false;
    } else if (password.length < this.config.passwordLength) {
      return false;
    }

    return true;
  }
}

export default UserValidator;
