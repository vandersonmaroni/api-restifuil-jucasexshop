package com.maroni.expose;

import java.io.Serializable;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.maroni.model.Destaque;
import com.maroni.model.JsonTotal;
import com.maroni.service.DestaqueService;

@Path("/destaques")
@RequestScoped
public class DestaqueExpose implements Serializable {
	private static final long serialVersionUID = -6901265516464787428L;

	@Inject
	private DestaqueService service;

	/**
	 * @author Vanderson Maroni | 17/02/2016
	 * @return
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Destaque> buscarTodos() {
		return service.findAll();
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Destaque buscarPorId(@PathParam("id") String id) {
		return service.findById(Integer.parseInt(id));
	}

	@GET
	@Path("{quantidade}/{quantidadeMaximaPorPagina}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Destaque> buscarParaPaginacao(@PathParam("quantidade") String quantidade, @PathParam("quantidadeMaximaPorPagina") String quantidadeMaximaPorPagina) {
		return service.buscarParaPaginacao(Integer.parseInt(quantidade), Integer.parseInt(quantidadeMaximaPorPagina));
	}

	@GET
	@Path("/total")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarTotal() {
		Number quantidadeTotalDeDestaques = service.quantidadeDestaque();
		JsonTotal json = new JsonTotal();
		json.setTotal((Long) quantidadeTotalDeDestaques);
		return Response.ok(json, MediaType.APPLICATION_JSON).build();
	}

//	@POST
//	@Produces(MediaType.APPLICATION_JSON)
//	public Response cadastrar(Destaque destaque) {
//		service.save(destaque);
//		return Response.ok(destaque, MediaType.APPLICATION_JSON).build();
//	}

	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response alterar(@PathParam("id") String id, Destaque destaque) {
		destaque.setId(Integer.parseInt(id));
		service.update(destaque);
		return Response.ok(destaque, MediaType.APPLICATION_JSON).build();
	}

	@DELETE
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response remover(@PathParam("id") String id) {
		service.delete(Integer.parseInt(id));
		return Response.ok(MediaType.APPLICATION_JSON).build();
	}
}
