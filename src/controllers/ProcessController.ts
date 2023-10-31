import { Request, Response } from "express";
import { ProcessService } from "../service/ProcessService";


export class ProcessController {
    async handle(request: Request, response: Response) {
        const processService = new ProcessService()

        const process = await processService.execute()

        return response.json({process})
    }
}