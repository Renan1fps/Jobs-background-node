import Mail from "../lib/Mail";

export default {
    key: 'RegistrationMail',
   async handle({data}){
       const {user} = data
       await Mail.sendMail({
            from: 'Renan mblabs <renan.nunes@mblabs.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: "Conhecendo filas com node",
            html: `Olá,${user.name}! isso é um teste de filas com email`
            
        })
    }
}