
function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const accountFormer = (name,surname, email, password) => {
    return {
        id: generateUID(),
        name,
        surname,
        email,
        password,
        Access: false
    }
}

export async function _getUsers () {
    return await fetch('http://localhost:3004/users').then((res) => res.json())
}

export const saveUser = async (user) => {
    console.log('This is ',user)
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }
    return await fetch('http://localhost:3004/users', options)
}