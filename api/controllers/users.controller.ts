import GeneralUserModel from '~/api/models/GeneralUserModel'

export const getUsers = async (): Promise<GeneralUserModel[]> => {
    try {
        const response = await fetch('https://random-data-api.com/api/v2/users?size=10&response_type=json');
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const data: GeneralUserModel[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}