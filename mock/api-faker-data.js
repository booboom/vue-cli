var faker = require('faker')
faker.locale = "zh_CN";
var _ = require("lodash");

const resultData = function (list) {
    return {
        code: 200,
        rs: 1,
        data: list
    }
}

const apiList = {
    'api/people': resultData(_.times(10, function (n) {
        return {
            id: n,
            name: faker.name.findName(),
            avatar: faker.internet.avatar()
        }
    })),
    'api/address': resultData(_.times(100, function () {
        return {
            id: faker.random.uuid(),
            city: faker.address.city(),
            county: faker.address.county()
        }
    }))
}

module.exports = apiList