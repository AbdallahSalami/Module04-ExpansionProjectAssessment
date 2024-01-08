import User from "../Models/UserModel"
import bcrypt from "bcrypt" //import bcrypt to hash the pass

class UserController {
    // Registrate  User
    static createUser = async(req,res) => {
        const saltRound=10;
        const hashedPassword=await bcrypt.hash(password,saltRound)
    
        try {
            const user = await User.create({ ...req.body ,password: hashedPassword})
            return res.json({msg:'user registered successfully'});
        } 
        catch(error) {
            return res.status(500).json({error: error.message})
        }User
    };

    // Get all User
    static getUser = async(req,res) => {   
        try {                                                                 
            const user= await User.findAll({})
            if (user.length === 0) {
                return res.status(404).json('there are no available users');
            }
            return res.status(200).json(user)
        }
        catch (error){
            return res.status(500).json(error);
        }
    };

    
// 3. get single User
    static getOneUser = async (req, res) => {
        let id = req.params.id;
        let user = await User.findOne({
        where: { id: id },
        });
        res.status(200).send(user);
    };
  
  // 4. update User
  static updateUser = async (req, res) => {
    let id = req.params.id;
    const user = await User.update(req.body, { where: { id: id } });
    res.status(200).send(user);
  };
  
  // 5. delete User
  static deleteUser = async (req, res) => {
    let id = req.params.id;
    await User.destroy({ where: { id: id } });
    res.status(200).send("User deleted");
  };
  
  static login = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
   
    const user = await User.findOne( {where: { username: username }});
    
    
    if (!user || !(await User.comparePassword(password, user.password))) {
      const error = res
        .status(401)
        .json({ message: "please enter a correct username or password" });
      return next(error);
    }
    const token = jwt.sign({ id: user.id, role:user.role.name}, process.env.SECRET_STRING, {
      expiresIn: process.env.LOGIN_EXPIRES,
    });
    res.status(200).json({ message: "success", token });
}
}
export default UserController