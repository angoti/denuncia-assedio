package com.denuciaassedio.futuropre_vestibular.entities.enums;

public enum DenunciaStatus {
	
	OPEN (1),
	PROCESSING (2),
	WAITING_RETURN (3),
	CLOSED (4),
	CANCELED (5);
	
	private Integer value;

	private DenunciaStatus(Integer value) {
		this.value = value;
	}

	public Integer getValue() {
		return value;
	}

	public static DenunciaStatus valueOf(int code) {
		for(DenunciaStatus value : DenunciaStatus.values()) {
			if(value.getValue() == code ) {
				return value;
			}
		}throw new IllegalArgumentException("OrderStatus invalido ");
	}

}
