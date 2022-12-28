<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Http\Resources\PropertyResource;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Request;
use Meilisearch\Endpoints\Indexes;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return AnonymousResourceCollection
     */
    public function index()
    {
        return PropertyResource::collection(Property::paginate());
    }

    /**
     * Search within meilisearch
     *
     * @return LengthAwarePaginator
     */
    public function search(Request $request)
    {
        return Property::search(
            query: trim($request->get('q', '')),
            callback: function (Indexes $meilisearch, string $query, array $options) use ($request) {
                if ($request->has('bedrooms')) {
                    $options['filter'] = "bedrooms = {$request->get('bedrooms')}";
                }
                return $meilisearch->search(
                    query: $query,
                    options: $options,
                );
            },
        )->paginate();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create()
    {
        return response()->json();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StorePropertyRequest $request
     * @return JsonResponse
     */
    public function store(StorePropertyRequest $request)
    {
        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param Property $property
     * @return JsonResponse
     */
    public function show(Property $property)
    {
        return response()->json(new PropertyResource($property));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Property $property
     * @return JsonResponse
     */
    public function edit(Property $property)
    {
        return response()->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdatePropertyRequest $request
     * @param Property $property
     * @return JsonResponse
     */
    public function update(UpdatePropertyRequest $request, Property $property)
    {
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Property $property
     * @return JsonResponse
     */
    public function destroy(Property $property)
    {
        return response()->json();
    }
}
