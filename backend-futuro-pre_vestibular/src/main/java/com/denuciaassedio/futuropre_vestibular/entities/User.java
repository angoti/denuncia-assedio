package com.denuciaassedio.futuropre_vestibular.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_user")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;

	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String name;
	private String email;

	private String dtBirthday;

	private String numberPhone;
	private String class_studant;

	@JsonIgnore // (lazy loading) 1 / N need associação para eviar loop
	@OneToMany // (mappedBy = "denuncia")
	private List<Denuncia> denuncia = new ArrayList<>();

	public User() {
	}

	public User(Integer id, String name, String email, String dtBirthday, String numberPhone, String class_studant) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.dtBirthday  = dtBirthday;
		this.numberPhone = numberPhone;
		this.class_studant = class_studant;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNumberPhone() {
		return numberPhone;
	}

	public void setNumberPhone(String numberPhone) {
		this.numberPhone = numberPhone;
	}

	public String getClass_studant() {
		return class_studant;
	}

	public void setClass_studant(String class_studant) {
		this.class_studant = class_studant;
	}

	public String getDtBirthday() {
		return dtBirthday;
	}

	public void setDtBirthday(String dtBirthday) {
		this.dtBirthday = dtBirthday;
	}

	@Override
	public int hashCode() {
		return Objects.hash(email, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return Objects.equals(email, other.email) && Objects.equals(id, other.id);
	}

}
