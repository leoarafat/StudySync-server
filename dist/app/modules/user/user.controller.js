"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const user_service_1 = require("./user.service");
const registrationUser = (0, catchAsync_1.default)(async (req, res) => {
    console.log(req.body);
    const result = await user_service_1.UserService.registrationUser(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: `Please check your email: ${result?.user?.email} to active your account`,
        activationToken: result.activationToken,
    });
});
const activateUser = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.activateUser(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "User activate successful",
    });
});
const loginUser = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.loginUser(req.body, res);
});
const logoutUser = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.logoutUser(req, res);
});
const updateAccessToken = (0, catchAsync_1.default)(async (req, res, next) => {
    await user_service_1.UserService.updateAccessToken(req, res, next);
});
const getUserById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.getUserById(req, res);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User retrieved by id successful",
        data: result,
    });
});
const socialAuth = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.socialAuth(req, res);
});
const updateUserInfo = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.updateUserInfo(req, res);
});
const updateUserPassword = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.updateUserPassword(req, res);
});
const updateProfilePicture = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.updateProfilePicture(req, res);
});
//Get all user
const getAllUsers = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.getAllUsers();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User retrieved successful",
        data: result,
    });
});
//Update user role only for admin
const updateUserRole = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.UserService.updateUserRole(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User role updated successful",
        data: result,
    });
});
//Delete user only for admin
const deleteUser = (0, catchAsync_1.default)(async (req, res) => {
    await user_service_1.UserService.deleteUser(req);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "User deleted successful",
    });
});
exports.UserController = {
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
    getAllUsers,
    updateUserRole,
    deleteUser,
};
