import { Request, Response } from "express";
import { createUserService, getUsersService, getUserByIdService, deleteUserService, loginUserService } from "../services/userService";
import { UserEntity } from "../entities/userEntity";


export const createUser =async (req: Request ,res: Response): Promise<void>=>{
  try {  
  const {firstName, lastName, email, username, password, birthdate,nDni}= req.body;
    const newUser= await createUserService ({ firstName, lastName, email,username, password, birthdate,nDni})
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};
// usersControllers.ts

// usersControllers.ts

// export const createUser = async (req: Request, res: Response): Promise<void> => {
//   try {  
//     const { firstName, lastName, email, username, password, birthdate, nDni, credentialsId } = req.body;
    
//     // Crear un objeto de datos para el nuevo usuario con las propiedades necesarias
//     const newUser: Partial<UserEntity> = { 
//       firstName, 
//       lastName, 
//       email, 
//       username, 
//       password, 
//       birthdate, 
//       nDni, 
//       credentialsId 
//     };

//     // Llamar a la función de servicio para crear el usuario
//     const createdUser = await createUserService(newUser);

//     res.status(201).json(createdUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error interno del servidor');
//   }
// };



export const loginUser =async (req: Request, res: Response) => {
  const {username, password}=req.body
  const returnLoginService = await loginUserService(username,password)
    res.json(returnLoginService);
  };
  
export const getUsers = async (req: Request ,res: Response)=>{
  try {
    const users:UserEntity[] = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const {id}= req.params
  const user : UserEntity | null = await getUserByIdService(Number(id))
  res.status(200).json(user);
}

   

export const deleteUser = async(req: Request ,res: Response)=>{
    const {id} = req.body;
    await deleteUserService(id);
    res.status(200).json({message: "eliminado correctamente"})
};


