package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Persona;
import com.example.demo.service.PersonaService;
import com.example.demo.util.JWTUtil;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
    private PersonaService personaService;

    @Autowired
    private JWTUtil jwtUtil;
    
    @PostMapping
	public ResponseEntity<?> createtoken(@RequestBody Persona personaDetalle){
		List<Persona> persona = personaService.findAdminById(personaDetalle.getId());
		if(persona!=null && persona.size()>0) {
			String tokenJwt = jwtUtil.getJWTToken(persona.get(0).getNumeroDocumento()+"");
            String resp = "{\"token\":\""+tokenJwt+"\"}";
            return ResponseEntity.ok(resp);
		} 
		return ResponseEntity.notFound().build();
	}
}