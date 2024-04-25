import { Request, Response } from 'express';

export class UserController {
	static async getUser(req: Request, res: Response) {
		try {
			res.status(200).json({ message: 'User data' });
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	}
}
