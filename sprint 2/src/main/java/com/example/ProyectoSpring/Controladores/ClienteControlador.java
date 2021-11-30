package com.example.ProyectoSpring.Controladores;

import java.util.ArrayList;
import java.util.Optional;

import com.example.ProyectoSpring.Modelos.ClienteModelo;
import com.example.ProyectoSpring.Servicios.ClienteServicio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE })
@RequestMapping("/cliente")
public class ClienteControlador {

    @Autowired
    ClienteServicio serv;

    @PostMapping()
    public ClienteModelo guardaCliente(@RequestBody ClienteModelo cliente) {
        return serv.guardaCliente(cliente);
    }

    @GetMapping()
    public ArrayList<ClienteModelo> consultaTodos() {
        return serv.consultaTodos();
    }

    @DeleteMapping(path = "/{id}")
    public boolean eliminarCliente(@PathVariable("id") Long id) {
        return serv.eliminarCliente(id);
    }

    @GetMapping(path = "/{id}")
    public Optional<ClienteModelo> consultaPorId(@PathVariable("id") Long id) {
        return serv.consultaClienteId(id);
    }

    @GetMapping(path = "/buscar/{nombre}")
    public ArrayList<ClienteModelo> obtenerPorNombre(@PathVariable("nombre") String nombre) {
        return serv.obtenerClientePorNombre(nombre);
    }

    @GetMapping(path = "/buscacorreo/{correo}")
    public ClienteModelo obtenerPorCorreo(@PathVariable("correo") String correo) {
        return serv.obtenerPorCorreo(correo);
    }

}
