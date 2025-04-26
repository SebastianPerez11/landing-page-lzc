import { services } from "../data/service.js";

export function getServiceById(id: string) {
  const matchedService = services.find((s) => s.id === id);
  if (!matchedService) {
    throw new Error(`No se encontró un servicio con el ID: ${id}`);
  }
  return matchedService;
}

export function getAllServicePaths() {
  return services.map((service) => ({ params: { service: service.id } }));
}