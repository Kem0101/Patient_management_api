import { Router } from 'express';
import Paciente from '../models/Paciente';

const router = Router();

router.get('/Get/:page?', async (req: any, res) => {
  const { page = 1, limit = 10 } = req.params;

  try {
    const pacientes = await Paciente.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Paciente.countDocuments();

    res.json({
      page: page,
      totalPages: Math.ceil(count / limit),
      pacientes,
    });
  } catch (err) {
    console.error(err);
  }
});

router.post('/Save', async (req, res) => {
  const {
    no,
    cedula,
    nombreCompleto,
    fechaNacimiento,
    edad,
    sexo,
    sector,
    celular,
    ars,
    antFam,
    antPatPer,
    alergias,
    medicamentos,
    toxicos,
    quirurgicos,
    habitoToxicoActual,
    signosSintomas,
    ta,
    fc,
    fr,
    talla,
    peso,
    aspectoGeneral,
    cabeza,
    cuello,
    toraxPulmones,
    corazon,
    abdomen,
    pielAnexos,
    extremidades,
    genitales,
    neurologico,
    laboratorio,
    imagenes,
    estudios,
    dieta,
    medicamentos2,
    diagnosticos,
    tratamientos,
  } = req.body;
  const newPaciente = new Paciente({
    no,
    cedula,
    nombreCompleto,
    fechaNacimiento,
    edad,
    sexo,
    sector,
    celular,
    ars,
    antFam,
    antPatPer,
    alergias,
    medicamentos,
    toxicos,
    quirurgicos,
    habitoToxicoActual,
    signosSintomas,
    ta,
    fc,
    fr,
    talla,
    peso,
    aspectoGeneral,
    cabeza,
    cuello,
    toraxPulmones,
    corazon,
    abdomen,
    pielAnexos,
    extremidades,
    genitales,
    neurologico,
    laboratorio,
    imagenes,
    estudios,
    dieta,
    medicamentos2,
    diagnosticos,
    tratamientos,
  });
  const savedPaciente = await newPaciente.save();
  res.json(savedPaciente);
});

router.get('/GetById/:id', async (req, res) => {
  const pacientes = await Paciente.findById(req.params.id);
  res.json(pacientes);
});

router.put('/Update/:id', async (req, res) => {
  const updatedPaciente = await Paciente.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(updatedPaciente);
});

router.delete('/Delete/:id', async (req, res) => {
  const pacientes = await Paciente.findByIdAndDelete(req.params.id);
  res.json(pacientes);
});

router.post('/delete', async (req, res) => {
  const pacientes = await Paciente.deleteMany({});
  res.json(pacientes);
});

export default router;
