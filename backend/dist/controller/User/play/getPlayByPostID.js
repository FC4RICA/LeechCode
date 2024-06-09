"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayByPostID = void 0;
const Schema_1 = require("../../../Model/Schema");
const getPlayByPostID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { postId } = req.query;
        const plays = yield Schema_1.PlayModel.find({ postId: postId }).populate("userId");
        res.status(200).json(plays);
    }
    catch (error) {
        console.log(error.message);
    }
});
exports.getPlayByPostID = getPlayByPostID;