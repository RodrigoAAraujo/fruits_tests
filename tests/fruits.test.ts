import app from "index";
import supertest from "supertest";

const api = supertest(app)

describe("POST /fruits", () => {
    it("RESPONSE 201, when body is correct", async () => {
        const object = {
            name: "Banana Verde",
            price: 908
        }
        const response = await api.post("/fruits").send(object)

        expect(response.status).toBe(201)
    })


    it("RESPONSE 422, when body is incorrect", async () => {
        const object = {
            name: "Banana Verde"
        }
        const response = await api.post("/fruits").send(object)

        expect(response.status).toBe(422)
    })

    it("RESPONSE 409, when there is conflict", async () => {
        const object = {
            name: "Banana Verde",
            price: 789
        }
        const response = await api.post("/fruits").send(object)

        expect(response.status).toBe(409)
    })
})

describe("GET /fruits", () => {

    it("RESPONSE 200, with correct body", async () => {
        const response = await api.get("/fruits")

        expect(response.status).toBe(200)

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    price: expect.any(Number)
                })

            ])
        )
    })

})

describe("GET /fruits/:id", () => {

    it("RESPONSE 200, with an available id", async () => {
        const response = await api.get("/fruits/1")

        expect(response.status).toBe(200)

        expect(response.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number)
            })
        )

    })

    it("RESPONSE 404, with an unavailable id", async () => {
        const response = await api.get("/fruits/2")

        expect(response.status).toBe(404)
    })

})