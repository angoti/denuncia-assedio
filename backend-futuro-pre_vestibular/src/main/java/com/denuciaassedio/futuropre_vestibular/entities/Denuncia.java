package com.denuciaassedio.futuropre_vestibular.entities;

import java.io.Serializable;
import java.util.Objects;

public class Denuncia implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Integer id;
	private User user;
	private String text;
	
	public Denuncia() {}
	
	public Denuncia(Integer id, User user, String text) {

		this.id = id;
		this.user = user;
		this.text = text;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Denuncia other = (Denuncia) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
	

}
