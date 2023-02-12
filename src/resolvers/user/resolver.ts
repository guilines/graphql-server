import { UserInfoResponse } from "../../generated/gql-types";

const resolvers = {
    Query: {
        userInfo: (): UserInfoResponse => ({
          contactDetails: {
            name: ['Luke'],
            lastName: ['Skywalker'],
            address: {
                direction: 'direction',
                city: 'city',
                country: 'country',
                zipcode: '0001'
            },
            phone: {
                code: '+991',
                number: '5544332211'
            }
          }  
        })
    }

};

export default resolvers;