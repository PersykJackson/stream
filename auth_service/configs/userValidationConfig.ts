export interface UserValidation {
  usernameLength: number;
  passwordLength: number;
}

const userValidationConfig: UserValidation = {
  usernameLength: 5,
  passwordLength: 12,
};

export default userValidationConfig;
