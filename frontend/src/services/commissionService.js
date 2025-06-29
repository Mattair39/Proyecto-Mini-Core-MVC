import api from './api';

const commissionService = {
  getVendedores: async () => {
    const response = await api.get('/vendedores/');
    return response.data;
  },

  getReglas: async () => {
    const response = await api.get('/reglas/');
    return response.data;
  },

  getVentas: async (params = {}) => {
    const response = await api.get('/ventas/', { params });
    return response.data;
  },

  crearVenta: async (ventaData) => {
    const response = await api.post('/ventas/', ventaData);
    return response.data;
  },

  actualizarVenta: async (id, ventaData) => {
    const response = await api.put(`/ventas/${id}/`, ventaData);
    return response.data;
  },

  eliminarVenta: async (id) => {
    await api.delete(`/ventas/${id}/`);
  },

  calcularComisiones: async (fechaInicio, fechaFin) => {
    const response = await api.post('/comisiones/calcular/', {
      fecha_inicio: fechaInicio,
      fecha_fin: fechaFin,
    });
    return response.data;
  },

  getResumenComisiones: async (fechaInicio, fechaFin) => {
    const response = await api.get('/comisiones/resumen/', {
      params: {
        fecha_inicio: fechaInicio,
        fecha_fin: fechaFin,
      },
    });
    return response.data;
  },
};

export default commissionService;