import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";

const registrationUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.registrationUser(req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `Please check your email: ${result?.user?.email} to active your account`,
      activationToken: result.activationToken,
    });
  }
);
const activateUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.activateUser(req.body);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User activate successful",
    });
  }
);
const loginUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.loginUser(req.body, res);
  }
);
const logoutUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.logoutUser(req, res);
  }
);
const updateAccessToken: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.updateAccessToken(req, res);
  }
);
const getUserById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.getUserById(req, res);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User retrieved by id successful",
      data: result,
    });
  }
);
const socialAuth: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.socialAuth(req, res);
  }
);
const updateUserInfo: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.updateUserInfo(req, res);
  }
);
const updateUserPassword: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.updateUserPassword(req, res);
  }
);
const updateProfilePicture: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    await UserService.updateProfilePicture(req, res);
  }
);
export const UserController = {
  registrationUser,
  activateUser,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserById,
  socialAuth,
  updateUserInfo,
  updateUserPassword,
  updateProfilePicture,
};
