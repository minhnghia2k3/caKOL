/* === DANGER ===
* This script will delete all data in database then insert new mock data
* Carefully before run this script
*/
import UserModel from "@/app/lib/models";
import { connectDB } from "@/app/lib/utils";
const userData = [
    {
        name: 'Minh Nghia',
        email: 'BrozennVN@gmail.com',
        password: '123456',
        avatar: 'https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256',
        type: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123',
        avatar: 'https://example.com/avatar1.png',
        type: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'securepass',
        avatar: 'https://example.com/avatar2.png',
        type: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        password: 'pass123',
        avatar: 'https://example.com/avatar3.png',
        type: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Bob Williams',
        email: 'bob.williams@example.com',
        password: 'qwerty',
        avatar: 'https://example.com/avatar4.png',
        type: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Eva Davis',
        email: 'eva.davis@example.com',
        password: 'eva123',
        avatar: 'https://example.com/avatar5.png',
        type: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

const seed = async () => {
    try {
        await connectDB();
        await UserModel.deleteMany({});
        await UserModel.insertMany(userData);
        console.log('🚀 Seed success')
    } catch (err: any) {
        throw new Error(err.message)
    }
}

export default seed;