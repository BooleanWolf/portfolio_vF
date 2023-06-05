import data from '../data/education.json';

export const getEducations = () => {
    return data;
}

export default (req, res) => {
    const educations = getEducations();
    res.json(educations);
}