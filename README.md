# 🏢 Truelogic Code Challenge - Backend Node.js | Typescript | Express | MySQL | Knex


<br>

## 👨🏽‍💻 Tech Stack
- Node.js
- Typescript
- Express
- MySQL
- Knex


## 📝 Functional Requirements
- Create an album
- Get an album by it's id and get the albuns list
- Update an album
- Delete an album
- Migration and seeding scripts

## 🏃‍♂️ How to run this application

1. ` git clone` to download the repository;
2. ` touch .env ` create your own .env file in the repo and fill in your enviroment variables 
3. ` npm install` to install the dependencies;
4. ` npm run pre:dev ` to create the Album table and seed it with mock data;
5. ` npm run start` to run the application @ http://localhost:3000/.

## 📌 Endpoints of the application

BaseUrl: http://localhost:3000/

### Create an Album

**`POST /v1/albums`** This service creates an album. You must provide a title, an url and a thumbnail url in the request body.

```
{
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
}

```

### Get the Albums

**`GET /v1/albums`** This service retrieves the albums list, limiting the results by 10 entities. You can also use the query param _offset_ to help you paginate the results.

### Get an Album by Id

**`GET /v1/albums/{id}`** This service retrieves a specific album by it's id, which it's provided through path param.

### Update an Album by Id

**`PATCH /v1/albums/{id}`** This service updates a specific album by it's id, which it's provided through path param. You must also provide a body in the request  with the attributes you want to update.

```
{
    "title": "Album title update"
}

```

### Delete an Album by Id

**`DELETE /v1/albums/{id}`** This service deletes a specific album by it's id, which it's provided through path param.



#### 👋🏽 How to reach me

Lourenço Passos | Fullstack Software Engineer | lo.passos93@gmail.com | 55-51-996106010





