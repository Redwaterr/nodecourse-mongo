const expect = require("expect");
const request = require("supertest");

const {app} = require("./../server");
const {user} = require("./../models/user");


describe("Post /users",() => {
    it("Should create a new user",(done) => {
        var name = "Ugur";
        request(app) 
            .post("/user")
            .send({name})
            .expect((res) => {
                expect(res.body.name).toBe(name);
            })
            .end((err,res) => {
                if(err) {
                    return done(err);
                }
            });

            user.find().then((users) => {
                expect(users.length).toBe(1);
                expect(todos[0].name).toBe(name);
            }).catch((e) => done(e));
    });
});
