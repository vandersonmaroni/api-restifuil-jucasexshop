package com.maroni.expose;

import java.io.Serializable;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.json.JSONObject;

import com.maroni.model.Login;
import com.maroni.model.Usuario;
import com.maroni.service.UsuarioService;

@Path("/login")
@RequestScoped
public class LoginExpose implements Serializable {
	private static final long serialVersionUID = 3214652299196645936L;

	@Inject
	private UsuarioService service;
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response logar(Login login){
		Usuario usuario = service.buscarPorLoginSenha(login.getUsuario(), login.getSenha());
		if(usuario == null){
 			return Response.status(Status.UNAUTHORIZED).build(); 
		}
		JSONObject json = new JSONObject();
		json.put("token", usuario.getToken());
		return Response.ok(json.toString(), MediaType.APPLICATION_JSON).build();
	}
}
