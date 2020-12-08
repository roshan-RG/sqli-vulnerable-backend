# docker run --name mysql -d mysql/mysql-server -p 3010:3306,3020:33060

# docker logs mysql 2>&1 | grep GENERATED

cd deploy
docker-compose up -d

docker exec -it deploy_mysql_1 mysql -uroot -p

alter user 'root' identified with mysql_native_password by 'root';
flush privileges;

create database slqi;
use sqli;

create table news (
    Id int PRIMARY KEY,
    Title varchar(64),
    Body varchar(1024),
    Datetime varchar(64)
);

insert into news (Id, Title, Body, Datetime)
values(1, "Boletín informativo", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda hic dolor, tempore, asperiores corporis quos perspiciatis", "05/10/2014 12:12:12" );
