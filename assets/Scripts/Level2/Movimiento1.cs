using UnityEngine;
using System.Collections;

public class Movimiento1 : MonoBehaviour {

	public float velocidad=3f;
	public GameObject este;

	// Use this for initialization
	public void Start () {

	}

	// Update is called once per frame
	public void Update () {
		transform.position -= transform.up * velocidad * Time.deltaTime;

		if (transform.position.y < -3) {
			DestroyImmediate(este);
		}
	}
}
