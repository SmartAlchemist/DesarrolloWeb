package com.example.ProyectoSpring.Modelos;

import org.springframework.data.annotation.Id;

public class ClienteModelo {

    @Id
    private Long id;

    private String nombre;
    private String Apellido;
    private String genero;
    private String fecha;
    private String correo;
    private String contrasena;
    private String ValidarContrasena;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return Apellido;
    }

    public void setApellido(String apellido) {
        Apellido = apellido;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getFechaString() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getValidarContrasena() {
        return ValidarContrasena;
    }

    public void setValidarContrasena(String validarContrasena) {
        this.ValidarContrasena = validarContrasena;
    }

}
