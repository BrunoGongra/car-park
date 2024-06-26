import Car from '../models/Car.js';

export const createCar = async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.status(200).json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCarById = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            await car.update(req.body);
            res.status(200).json(car);
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id);
        if (car) {
            await car.destroy();
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Car not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
