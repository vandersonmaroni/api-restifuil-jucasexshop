package com.maroni.expose;

import java.io.IOException;
import java.io.Serializable;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.jose4j.lang.JoseException;

import com.maroni.model.Usuario;
import com.maroni.service.UsuarioService;
import com.maroni.util.token.TokenAuthenticationGenerator;

@Path("usuarios")
@RequestScoped
public class UsuarioExpose implements Serializable{
	private static final long serialVersionUID = 1614835852737817622L;

	@Inject
	private UsuarioService service;

	/**
	 * @author Vanderson Maroni | 17/02/2016
	 * @return
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> buscarTodos(){
		return service.findAll();
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response cadastrar(Usuario usuario){
		Usuario existeUsuario = service.buscarPorLoginSenha(usuario.getLogin(),usuario.getSenha());
		if(existeUsuario != null){
			return Response.status(Status.NOT_ACCEPTABLE).build();
		}
		try {
			usuario.setToken(TokenAuthenticationGenerator.createToken(TokenAuthenticationGenerator.getJsonFromUsuario(usuario)));
		} catch (NoSuchAlgorithmException | InvalidKeySpecException | JoseException | IOException e) {
			e.printStackTrace();
		}
		service.save(usuario);
		return Response.ok(usuario, MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Usuario usuario) {
		usuario.setId(Integer.parseInt(id));
		service.update(usuario);
		return Response.ok(usuario, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id){
		service.delete(Integer.parseInt(id));
		return Response.ok(MediaType.APPLICATION_JSON).build();
	}
}
