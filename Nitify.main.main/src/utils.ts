import bcrypt from "bcrypt";

export const random = (len: number) => {

    const options = "qwertyuio[asdfghjklzxcvbnm1234567890";
    const length = options.length;
    let hash = ""

    for (let idx=0; idx<len; idx++) {
        hash += options[Math.floor((Math.random() * length))]; // 0=> 20
    }

    return hash;

}

export const hashPassword = async (password: string) => {
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;

}

export const comparePassword = async (password: string, hash: string) => {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
}