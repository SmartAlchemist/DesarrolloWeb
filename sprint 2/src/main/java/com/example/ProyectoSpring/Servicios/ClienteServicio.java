package com.example.ProyectoSpring.Servicios;

import java.util.ArrayList;
import java.util.Optional;

import com.example.ProyectoSpring.Modelos.ClienteModelo;
import com.example.ProyectoSpring.Repositorios.ClienteRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteServicio {

    @Autowired
    ClienteRepo repo;

    public ClienteModelo guardaCliente(ClienteModelo cliente) {
        return repo.save(cliente);

    }

    public ArrayList<ClienteModelo> consultaTodos() {
        return (ArrayList<ClienteModelo>) repo.findAll();
    }

    public boolean eliminarCliente(Long id) {

        if (repo.existsById(id)) {
            repo.deleteById(id);
            return true;
        } else {
            return false;
        }

    }

    public Optional<ClienteModelo> consultaClienteId(Long id) {
        return repo.findById(id);

    }

    public ArrayList<ClienteModelo> obtenerClientePorNombre(String nombre) {
        return repo.findByNombre(nombre);
    }

    public ClienteModelo obtenerPorCorreo(String correo) {
        return repo.findByCorreo(correo);

    }

}
