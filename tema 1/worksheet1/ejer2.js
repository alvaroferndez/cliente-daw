fechaHoy = new Date()
fecha85 = new Date()
fecha85.setDate(fechaHoy.getDate() +85)
fecha187 = new Date()
fecha187.setDate(fechaHoy.getDate() -187)
fecha85.setYear(fecha85.getFullYear() +2)
fecha187.setHours(fecha187.getHours() -24)
fecharesto = (fecha85 - fecha187)
document.write(`${fecha85}<br>${fecha187}<br>${fecharesto}`)