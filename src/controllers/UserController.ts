// import { Request, Response } from 'express';


class UserController {
  public id = 0;

  public getId () {
    return this.id;
  }

  public updateId () {
    this.id = this.id + 1;
  }
}

export default new UserController();
