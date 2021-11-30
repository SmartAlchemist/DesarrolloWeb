package com.example.ProyectoSpring.Repositorios;

import java.util.ArrayList;

import com.example.ProyectoSpring.Modelos.ClienteModelo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepo extends MongoRepository<ClienteModelo, Long> {
    ArrayList<ClienteModelo> findByNombre(String nombre);

    ClienteModelo findByCorreo(String correo);

}
