package com.maroni.expose;

import java.io.Serializable;
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

import com.maroni.model.Servico;
import com.maroni.service.ServicoService;


@Path("/servicos")
@RequestScoped
public class ServicoExpose implements Serializable{
	private static final long serialVersionUID = -725714741613772422L;

	@Inject
	private ServicoService service;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Servico> buscarTodos(){
		return service.findAll();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Servico buscarPorId(@PathParam("id") String id){
		return service.findById(Integer.parseInt(id));
	}
	
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	public Response cadastrar(Servico servico){
		service.save(servico);
		return Response.ok(servico, MediaType.APPLICATION_JSON).build();
	}
	
	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Servico servico) {
		servico.setId(Integer.parseInt(id));
		service.update(servico);
		return Response.ok(servico, MediaType.APPLICATION_JSON).build();
	}
	
	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id){
		service.delete(Integer.parseInt(id));
		return Response.ok(MediaType.APPLICATION_JSON).build();
	}
}
