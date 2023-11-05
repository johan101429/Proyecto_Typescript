class Cita<T> {
    paciente: string;
    doctor: string;
    fecha: T; 
    hora: string;
    motivo: string;
  
    constructor(paciente: string, doctor: string, fecha: T, hora: string, motivo: string) {
      this.paciente = paciente;
      this.doctor = doctor;
      this.fecha = fecha;
      this.hora = hora;
      this.motivo = motivo;
    }
  }
  
  const citas: Cita<Date>[] = [
    new Cita('Valentina', 'Dr. Martínez', new Date('2023-10-15'), '10:00', 'Revisión'),
    new Cita('Jorge', 'Dra. García', new Date('2023-10-22'), '11:30', 'Operación')
  ];
  
  function agregarCita(cita: Cita<Date>) {
    citas.push(cita);
  }
  
  function eliminarCita(cita: Cita<Date>) {
    const index = citas.indexOf(cita);
    if (index > -1) {
      citas.splice(index, 1); 
    }
  }
  
  function buscarCita(doctor: string) {
    return citas.filter(cita => cita.doctor === doctor);
  }
  
  const citasHoy = () => {
    const hoy = new Date();
    return citas.filter(
      (cita) =>
        cita.fecha.getDate() === hoy.getDate() &&
        cita.fecha.getMonth() === hoy.getMonth() &&
        cita.fecha.getFullYear() === hoy.getFullYear()
    );
  };
  
  function citasFecha(fecha: Date) {
    return citas.filter(cita => cita.fecha.getTime() === fecha.getTime());
  }
  
  // Ejemplos de uso
  
  const nuevaCita = new Cita('Ana', 'Dr. López', new Date('2023-10-31'), '09:00', 'Consulta');
  
  agregarCita(nuevaCita); 
  
  const citasDrGarcia = buscarCita('Dra. García');
  
  const citasHoy2 = citasHoy();
  
  const citas22Oct = citasFecha(new Date('2023-10-22'));
  console.log(citas22Oct);
  