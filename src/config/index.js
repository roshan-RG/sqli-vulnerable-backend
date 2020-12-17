const config = {
    MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
    MYSQL_USER: process.env.MYSQL_USER || "user",
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "root",
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || "sqli"
};

export default config
