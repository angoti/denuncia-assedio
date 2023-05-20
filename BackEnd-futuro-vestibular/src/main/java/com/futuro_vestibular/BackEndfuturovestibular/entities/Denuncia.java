package com.futuro_vestibular.BackEndfuturovestibular.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_denuncia")
public class Denuncia implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private String text;
	private String place;
	private String name_author;
	
	//@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy'T'HH:mm'Z'", timezone = "GMT")
	private String moment;
	
	private String denunciaStatus;
	
	/**
	 * OPEN (1),
	 * PROCESSING (2),
	 * WAITING_RETURN (3),
	 * CLOSED (4),
	 */
	
	public Denuncia() {
		System.out.println("construtor denuncia");
	}
	
	public Denuncia(Integer id, String place, String moment, User user, String text, String name_author) {
		this.id = id;
		this.denunciaStatus = "OPEN";
		this.place = place;
		this.text = text;
		this.moment = moment;
		this.name_author = name_author;
	}
	
	
	public Integer getId() {
		return id;
	}
	
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getText() {
		return text;
	}
	
	public void setText(String text) {
		System.out.println("setando o texto da denuncia");
		this.text = text;
	}
	
	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}
	
	public String getMoment() {
		return moment;
	}

	public void setMoment(String moment) {
		this.moment = moment;
	}

	public String getName_author() {
		return name_author;
	}

	public void setName_author(String name_author) {
		this.name_author = name_author;
	}

	public String getDenunciaStatus() {
		return denunciaStatus;
	}

	public void setDenunciaStatus(String denunciaStatus) {
		this.denunciaStatus = denunciaStatus;
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
