using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class botonDer : MonoBehaviour, IPointerDownHandler, IPointerUpHandler {

	public GameObject holi;
	public float velocidad;


	public void OnPointerDown(PointerEventData eventData){

		holi.transform.position += holi.transform.right * velocidad * Time.deltaTime;

	}

	public void OnPointerUp(PointerEventData eventData){



	}

	void Start(){


	}


	void Update(){
	}

}
