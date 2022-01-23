import db from '../db';
import { Request, Response } from 'express';

class UserController {
  public id = 0;

  public getId () {
    return this.id;
  }

  public updateId () {
    this.id = this.id + 1;
  }

  public index (req: Request, res: Response) {
    const getCommand = `
      SELECT * FROM users;
    `;
    return db.query(getCommand, (err, result) => {
      if (err) throw err;
      res.end(JSON.stringify(result));
    });
  }

  public post = (req: Request, res: Response) => {
    const insertCommand = `
    INSERT INTO users (user, password) VALUES ("${this.id}", "pw${this.id}")
    `;
    return db.query(insertCommand, (err, result) => {
      if (err) throw err;
      res.end(JSON.stringify(result));
      this.updateId();
    });
  };
}

export default new UserController();
