export default class UserLogin {
    constructor(repository) {
        this.repository = repository
    }

    async run(email, password) {
        const validCredentials = await this.repository.checkEmailAndPassword(email, password)
        if(validCredentials) return true
        return false
    }

}
