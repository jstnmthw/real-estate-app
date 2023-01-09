<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Http\Resources\PropertyResource;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Request;
use Meilisearch\Endpoints\Indexes;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function index(Request $request): AnonymousResourceCollection
    {
        $limit = $request->input('limit', 20) > 20 ? 20 : $request->input('limit');
        return PropertyResource::collection(Property::query()->paginate($limit));
    }

    /**
     * Search within meilisearch
     *
     * @param Request $request
     * @return AnonymousResourceCollection
     */
    public function search(Request $request): AnonymousResourceCollection
    {
        return PropertyResource::collection(
            Property::search(
                trim($request->get('q', '')),
                function (Indexes $meilisearch, string $query, array $options) use ($request) {
                    if ($request->has('bedrooms')) {
                        $options['filter'] = "bedrooms = {$request->get('bedrooms')}";
                    }
                    return $meilisearch->search(
                        $query,
                        $options,
                    );
                },
            )->paginate()->withQueryString()
        );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create(): JsonResponse
    {
        return response()->json();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StorePropertyRequest $request
     * @return JsonResponse
     */
    public function store(StorePropertyRequest $request): JsonResponse
    {
        return response()->json();
    }

    /**
     * Display the specified resource.
     *
     * @param Property $property
     * @return JsonResponse
     */
    public function show(Property $property): JsonResponse
    {
        return response()->json(new PropertyResource($property));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Property $property
     * @return JsonResponse
     */
    public function edit(Property $property): JsonResponse
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
    public function update(UpdatePropertyRequest $request, Property $property): JsonResponse
    {
        return response()->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Property $property
     * @return JsonResponse
     */
    public function destroy(Property $property): JsonResponse
    {
        return response()->json();
    }
}
